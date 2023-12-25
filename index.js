function paginate(data, recordPerPage, page) {
    return {
        page,
        recordPerPage,
        data: data.slice((page - 1) * recordPerPage, page * recordPerPage)
    }
}

// console.log(paginate([1, 2, 3, 4, 5, 6], 2, 2));
console.log(paginate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 3, 2));