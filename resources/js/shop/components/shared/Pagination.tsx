import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

interface PaginationProps {
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    totalPages: number;
    totalProducts: number;
}

const Pagination = (props: PaginationProps) => {
    const { currentPage, setCurrentPage, totalPages, totalProducts } = props;

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePreviousPage = () => {
        setCurrentPage(currentPage - 1);
    };
    return (
        totalProducts > 0 && (
            <div className="flex">
                <p>{`15 produits sur ${totalProducts}`}</p>
                <p>{`Page ${currentPage} sur ${totalPages}`}</p>

                <button
                    disabled={currentPage === 1}
                    className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    onClick={() => handlePreviousPage()}
                >
                    Prédént
                </button>
                <button
                    disabled={currentPage === totalPages}
                    className="flex items-center justify-center px-3 h-8 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    onClick={() => handleNextPage()}
                >
                    Suivant
                </button>
            </div>
        )
    );
};

export default Pagination;
