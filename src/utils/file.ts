export const getBase64 = (img: Blob | File): Promise<string | ArrayBuffer | null | undefined> => {
	const reader = new FileReader()
	reader.readAsDataURL(img)
	return new Promise((res) => {
		reader.addEventListener('load', () => res(reader.result))
	})
}

export const normalizeJson = (str: string): string =>
	str.split('\n').join('').split('\t').join('').trim()
