import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

interface PaginationProps {
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    totalPages: number;
    totalElements: number;
    numberOfElements: number;
}

const Pagination = (props: PaginationProps) => {
    const {
        currentPage,
        setCurrentPage,
        totalPages,
        totalElements,
        numberOfElements,
    } = props;

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePreviousPage = () => {
        setCurrentPage(currentPage - 1);
    };
    return (
        totalElements > 0 && (
            <div className="flex items-center">
                <p className="border-r mr-4 pr-3">{`${numberOfElements} éléments sur ${totalElements}`}&nbsp;</p>
                
                <p className="mr-4">{`Page ${currentPage} sur ${totalPages}`}</p>

                <button
                    disabled={currentPage === 1}
                    className="mr-2 rounded-md transition-all text-sm inline-block font-title font-bold border-2 py-1 px-2 shadow-buttonDarkBase hover:shadow-buttonDarkHover hover:text-secondary text-accent border-accent"
                    onClick={() => handlePreviousPage()}
                >
                    Précédent
                </button>
                <button
                    disabled={currentPage === totalPages}
                    className="rounded-md transition-all text-sm inline-block font-title font-bold border-2 py-1 px-2 shadow-buttonDarkBase hover:shadow-buttonDarkHover hover:text-secondary text-accent border-accent"
                    onClick={() => handleNextPage()}
                >
                    Suivant
                </button>
            </div>
        )
    );
};

export default Pagination;
