// https://gist.github.com/gordonbrander/2230317
export const generateUniqueId = () => {
    const mathRandom = Math.random();
	console.log('TLC: genUniqId -> mathRandom', mathRandom);
    const toString = mathRandom.toString(36);
	console.log('TLC: genUniqId -> toString', toString);
    const id = toString.substr(2, 9);
	console.log('TLC: genUniqId -> id', id);
    return id;
// return Math.random().toString(36).substr(2, 9);
};