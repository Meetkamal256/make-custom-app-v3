function sliceBuffer(data, offset, size = 1) {
    let end = offset + size;

    if (end > data.length) {
        end = data.length;
    }

    const sliced_data = data.slice(offset, end);

    return sliced_data;
}