import Item from "./Item"

function Navigation() {
    return (
        <div className="navgation">
            <ul className="navgationList">
                <Item 
                    url={'https://dzen.ru/news?utm_referrer=dzen.ru'}
                    title={'Видео'}
                />
                <Item 
                    url={'https://dzen.ru/news?utm_referrer=dzen.ru'}
                    title={'Картинки'}
                />
                <Item 
                    url={'https://dzen.ru/news?utm_referrer=dzen.ru'}
                    title={'Новости'}
                />
                <Item 
                    url={'https://dzen.ru/news?utm_referrer=dzen.ru'}
                    title={'Карты'}
                />
                <Item 
                    url={'https://dzen.ru/news?utm_referrer=dzen.ru'}
                    title={'Маркет'}
                />
            </ul>
        </div>
    )
}

export default Navigation