import React from "react";

interface SearchInputProps {
    onSubmit: (e) => void;
    onEmptyValue: () => void;
}

const SearchIntput = (props: SearchInputProps) => {
    const { onSubmit, onEmptyValue } = props;
    return (
        <form className="w-80 mx-auto" onSubmit={(e) => onSubmit(e)}>
            <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only"
            >
                Rechercher
            </label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                        className="w-4 h-4 text-table"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                    </svg>
                </div>
                <input
                    type="search"
                    id="default-search"
                    name="search"
                    className="placeholder:text-table bg-accent block w-full p-4 ps-10 text-sm table rounded-lg"
                    placeholder="Rechercher un produit"
                    onChange={(e) => {
                        const value = e.target.value;
                        if (!value) {
                            onEmptyValue();
                        }
                    }}
                    required
                />
                <button
                    type="submit"
                    className="absolute end-2.5 bottom-2.5 rounded-md transition-all text-xs inline-block font-title font-bold border-2 py-2 px-4 shadow-buttonLightBase hover:shadow-buttonLightHover hover:text-accent text-secondary border-secondary"
                >
                    Rechercher
                </button>
            </div>
        </form>
    );
};

export default SearchIntput;
