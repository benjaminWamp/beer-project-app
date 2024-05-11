import React, { useEffect } from "react";

import { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
    ChevronDownIcon,
    FunnelIcon,
    MinusIcon,
    PlusIcon,
} from "@heroicons/react/20/solid";
import ProductList from "./ProductList";
import { SortingType } from "../../types/sorting.enum";
import Pagination from "../shared/Pagination";
import { Product } from "../../types/product.types";
import { Category } from "../../types/category.types";
import { Manufacturer } from "../../types/manufacturer.types";
import { FilterType } from "../../types/filters.enum";
import SearchIntput from "../shared/SearchInput";
import { Favorite } from "../../types/favorite.types";

const sortOptions = [
    { name: FilterType.BEST, value: SortingType.BEST },
    { name: FilterType.NEW, value: SortingType.NEW },
    { name: FilterType.ASC, value: SortingType.PRICE },
    { name: FilterType.DESC, value: SortingType.PRICE },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

interface FilterProps {
    products: Product[];
    categories: Category[];
    manufacturers: Manufacturer[];
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    totalPages: number;
    setTotalPages: React.Dispatch<React.SetStateAction<number>>;
    totalProducts: number;
    setTotalProducts: React.Dispatch<React.SetStateAction<number>>;
    getProducts: (
        page: number,
        categories?: string[],
        manufacturers?: string[],
        sorting?: string,
        order?: string,
        search?: string
    ) => Promise<any>;
}

const Filters = (props: FilterProps) => {
    const {
        products,
        categories,
        manufacturers,
        currentPage,
        setCurrentPage,
        totalPages,
        setTotalPages,
        totalProducts,
        setTotalProducts,
        getProducts,
        // handleAddToFavorite,
        // userFavorites,
        // handleDeleteFavorite,
    } = props;

    const [mobileFiltersOpen, setMobileFiltersOpen] = useState<boolean>(false);
    const [categoriesChecked, setCategoriesChecked] = useState<Array<string>>(
        []
    );
    const [manufacturersChecked, setManufacturersChecked] = useState<
        Array<string>
    >([]);

    const [filteredProducts, setFilteredProducts] =
        useState<Array<Product>>(products);

    const [sortingValue, setSortingValue] = useState<SortingType | undefined>(
        undefined
    );
    const [orderValue, setOrderValue] = useState<string | undefined>("desc");
    const [searchValue, setSearchValue] = useState<string | undefined>(
        undefined
    );

    const addCatergoryChecked = (e) => {
        const isChecked: boolean = e.target.checked;
        const categoryChecked: string = e.target.value;
        if (isChecked) {
            setCategoriesChecked([...categoriesChecked, categoryChecked]);
        } else {
            setCategoriesChecked(
                categoriesChecked.filter((item) => item !== categoryChecked)
            );
        }
        setCurrentPage(1);
    };

    const addManufacturerChecked = (e) => {
        const isChecked: boolean = e.target.checked;
        const manufacturerChecked: string = e.target.value;

        if (isChecked) {
            setManufacturersChecked([
                ...manufacturersChecked,
                manufacturerChecked,
            ]);
        } else {
            setManufacturersChecked(
                manufacturersChecked.filter(
                    (item) => item !== manufacturerChecked
                )
            );
        }
        setCurrentPage(1);
    };

    const handleSorting = (e) => {
        setSortingValue(e.target.value);
        handleOrderValue(e);
    };

    const handleOrderValue = (e) => {
        if (e.target.name === FilterType.ASC && orderValue === "desc") {
            setOrderValue("asc");
        } else if (e.target.name === FilterType.DESC && orderValue === "asc") {
            setOrderValue("desc");
        }
    };

    useEffect(() => {
        const getDatas = async () => {
            const ProductsData = await getProducts(
                currentPage,
                categoriesChecked,
                manufacturersChecked,
                sortingValue,
                orderValue,
                searchValue
            );
            setFilteredProducts(ProductsData.data);
            setTotalPages(ProductsData.last_page);
            setTotalProducts(ProductsData.total);
        };
        getDatas();
        window.scrollTo(0, 0);
    }, [
        categoriesChecked,
        manufacturersChecked,
        orderValue,
        sortingValue,
        currentPage,
        searchValue,
    ]);

    const findNameByValue = (value: string) => {
        if (orderValue === "desc" && value === SortingType.PRICE) {
            return FilterType.DESC;
        } else if (orderValue === "asc" && value === SortingType.PRICE) {
            return FilterType.ASC;
        } else {
            const option = sortOptions.find((option) => option.value === value);
            return option ? option.name : "";
        }
    };

    const isChecked = (option) => {
        if (
            option.name === FilterType.DESC &&
            sortingValue === SortingType.PRICE
        ) {
            return orderValue === "desc";
        } else if (option.name === FilterType.ASC) {
            return orderValue === "asc";
        } else {
            return sortingValue === option.value;
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        const search = e.target.search.value;
        setSearchValue(search);
    };

    const handleEmptySearch = () => {
        setSearchValue("");
    };

    return (
        <div className="bg-background">
            <div>
                {/* Mobile filter dialog */}
                <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                    <Dialog
                        as="div"
                        className="relative z-40 lg:hidden"
                        onClose={setMobileFiltersOpen}
                    >
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>

                        <div className="fixed inset-0 z-40 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                                    <div className="flex items-center justify-between px-4">
                                        <h2 className="text-lg font-medium text-gray-900">
                                            Filters
                                        </h2>
                                        <button
                                            type="button"
                                            className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                                            onClick={() =>
                                                setMobileFiltersOpen(false)
                                            }
                                        >
                                            <span className="sr-only">
                                                Close menu
                                            </span>
                                            <XMarkIcon
                                                className="h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        </button>
                                    </div>

                                    {/* Filters */}
                                    <form className="mt-4 border-t border-gray-200">
                                        <h3 className="sr-only">Categories</h3>
                                        <div className="space-y-4">
                                            {categories.map(
                                                (category, index) => (
                                                    <div
                                                        key={`category - ${index}`}
                                                        className="flex items-center"
                                                    >
                                                        <input
                                                            id={`filter-${category.name}-${index}`}
                                                            name={`filter-${category.name}-${index}`}
                                                            defaultValue={
                                                                category.id
                                                            }
                                                            type="checkbox"
                                                            className="h-4 w-4 rounded border-accent/50 text-accent focus:ring-accent"
                                                        />
                                                        <label
                                                            htmlFor={`filter-${category.name}-${index}`}
                                                            className="font-title font-bold ml-3 text-sm text-gray-600"
                                                        >
                                                            {category.name}
                                                        </label>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                        <Disclosure
                                            as="div"
                                            key="category - ${name}"
                                            className="border-b border-gray-200 py-6"
                                        >
                                            {({ open }) => (
                                                <>
                                                    <h3 className="-my-3 flow-root">
                                                        <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                                            <span className="font-title font-bolder text-gray-900">
                                                                Producteurs
                                                            </span>
                                                            <span className="ml-6 flex items-center">
                                                                {open ? (
                                                                    <MinusIcon
                                                                        className="h-5 w-5"
                                                                        aria-hidden="true"
                                                                    />
                                                                ) : (
                                                                    <PlusIcon
                                                                        className="h-5 w-5"
                                                                        aria-hidden="true"
                                                                    />
                                                                )}
                                                            </span>
                                                        </Disclosure.Button>
                                                    </h3>
                                                    <Disclosure.Panel className="pt-6">
                                                        <div className="space-y-4">
                                                            {manufacturers.map(
                                                                (
                                                                    manufacturer,
                                                                    index
                                                                ) => (
                                                                    <div
                                                                        key={`manufacturer - ${index}`}
                                                                        className="flex items-center"
                                                                    >
                                                                        <input
                                                                            id={`filter-${manufacturer.name}-${index}`}
                                                                            name={`filter-${manufacturer.name}-${index}`}
                                                                            defaultValue={
                                                                                manufacturer.id
                                                                            }
                                                                            type="checkbox"
                                                                            className="h-4 w-4 rounded border-accent/50 text-accent focus:ring-accent"
                                                                        />
                                                                        <label
                                                                            htmlFor={`filter-${manufacturer.name}-${index}`}
                                                                            className="ml-3 text-sm text-gray-600"
                                                                        >
                                                                            {
                                                                                manufacturer.name
                                                                            }
                                                                        </label>
                                                                    </div>
                                                                )
                                                            )}
                                                        </div>
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>

                <main className="pt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-4">
                        <h1 className="text-4xl font-title font-bold tracking-tight text-accent">
                            Nos Bières
                        </h1>

                        <div className="flex items-center">
                            <Menu
                                as="div"
                                className="relative inline-block text-left"
                            >
                                <SearchIntput
                                    onSubmit={handleSearch}
                                    onEmptyValue={handleEmptySearch}
                                />
                                <div>
                                    <Menu.Button className="group inline-flex justify-center text-m font-title font-bold text-accent hover:text-gray-900">
                                        {sortingValue
                                            ? findNameByValue(sortingValue)
                                            : "Trier"}
                                        <ChevronDownIcon
                                            className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                            aria-hidden="true"
                                        />
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    {/* Button Sort */}
                                    <Menu.Items className="absolute p-2.5 font-title right-0 z-10 mt-2 w-52 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">
                                            {sortOptions.map(
                                                (option, index) => (
                                                    <Menu.Item
                                                        key={option.name}
                                                    >
                                                        {({ active }) => (
                                                            <div
                                                                key={`category - ${index}`}
                                                                className="flex items-center"
                                                            >
                                                                <input
                                                                    id={`filter-${option.name}-${index}`}
                                                                    name={
                                                                        option.name
                                                                    }
                                                                    defaultValue={
                                                                        option.value
                                                                    }
                                                                    type="radio"
                                                                    checked={isChecked(
                                                                        option
                                                                    )}
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        handleSorting(
                                                                            e
                                                                        )
                                                                    }
                                                                    className="h-4 w-4 rounded border-accent text-accent focus:ring-accent"
                                                                />
                                                                <label
                                                                    htmlFor={`filter-${option.name}-${index}`}
                                                                    className="ml-3 text-sm text-gray-600"
                                                                >
                                                                    {
                                                                        option.name
                                                                    }
                                                                </label>
                                                            </div>
                                                        )}
                                                    </Menu.Item>
                                                )
                                            )}
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>


                            <button
                                type="button"
                                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                                onClick={() => setMobileFiltersOpen(true)}
                            >
                                <span className="sr-only">Filters</span>
                                <FunnelIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                />
                            </button>
                        </div>

                    <section
                        aria-labelledby="products-heading"
                        className="pb-24 pt-6"
                    >
                        <h2 id="products-heading" className="sr-only">
                            Products
                        </h2>

                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                            {/* Categories */}
                            <form className="hidden lg:block">
                                <h3 className="sr-only">Categories</h3>
                                <div className="space-y-4">
                                    {categories.map((category, index) => (
                                        <div
                                            key={`category - ${index}`}
                                            className="flex items-center"
                                        >
                                            <input
                                                id={`filter-${category.name}-${index}`}
                                                name={`filter-${category.name}-${index}`}
                                                defaultValue={category.id}
                                                type="checkbox"
                                                onChange={(e) =>
                                                    addCatergoryChecked(e)
                                                }
                                                className="h-4 w-4 rounded border-accent/50 text-accent focus:ring-accent"
                                            />
                                            <label
                                                htmlFor={`filter-${category.name}-${index}`}
                                                className="font-title font-bold ml-3 text-sm text-gray-600"
                                            >
                                                {category.name}
                                            </label>
                                        </div>
                                    ))}
                                </div>

                                <Disclosure
                                    as="div"
                                    key="category - ${name}"
                                    className="border-b border-gray-200 py-6"
                                >
                                    {({ open }) => (
                                        <>
                                            <h3 className="-my-3 flow-root">
                                                <Disclosure.Button className="flex w-full items-center justify-between py-3 text-sm text-gray-400 hover:text-gray-500">
                                                    <span className="font-title font-bold text-accent text-xl">
                                                        Producteurs
                                                    </span>
                                                    <span className="ml-6 flex items-center">
                                                        {open ? (
                                                            <MinusIcon
                                                                className="text-accent h-5 w-5"
                                                                aria-hidden="true"
                                                            />
                                                        ) : (
                                                            <PlusIcon
                                                                className="text-accent h-5 w-5"
                                                                aria-hidden="true"
                                                            />
                                                        )}
                                                    </span>
                                                </Disclosure.Button>
                                            </h3>
                                            <Disclosure.Panel className="pt-6">
                                                <div className="space-y-4">
                                                    {manufacturers.map(
                                                        (
                                                            manufacturer,
                                                            index
                                                        ) => (
                                                            <div
                                                                key={`manufacturer - ${index}`}
                                                                className="flex items-center"
                                                            >
                                                                <input
                                                                    id={`filter-${manufacturer.name}-${index}`}
                                                                    name={`filter-${manufacturer.name}-${index}`}
                                                                    defaultValue={
                                                                        manufacturer.id
                                                                    }
                                                                    type="checkbox"
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        addManufacturerChecked(
                                                                            e
                                                                        )
                                                                    }
                                                                    className="h-4 w-4 rounded border-accent/50 text-accent focus:ring-accent"
                                                                />
                                                                <label
                                                                    htmlFor={`filter-${manufacturer.name}-${index}`}
                                                                    className="font-title font-bold ml-3 text-sm text-gray-600"
                                                                >
                                                                    {
                                                                        manufacturer.name
                                                                    }
                                                                </label>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            </form>

                            {/* Product grid */}
                            <div className="lg:col-span-3">
                                {filteredProducts.length > 0 ? (
                                    <ProductList products={filteredProducts} />
                                ) : (
                                    <h2>
                                        Aucune bière ne correspond à vos
                                        critères
                                    </h2>
                                )}
                                <Pagination
                                    currentPage={currentPage}
                                    setCurrentPage={setCurrentPage}
                                    totalPages={totalPages}
                                    totalElements={totalProducts}
                                    numberOfElements={15}
                                />
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Filters;
