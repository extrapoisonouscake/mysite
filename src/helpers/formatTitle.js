import titles from 'data/titles'
export default function formatTitle(pageName){
    return `${titles[pageName] || "Не найдено"} | Владислав Губарев`
}