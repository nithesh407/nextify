function isFile(value: FormDataEntryValue): value is File {
    return value instanceof File
}

export default isFile