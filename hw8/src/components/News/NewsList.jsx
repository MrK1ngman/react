import News from "./News"

function NewsList() {
    return (
        <div className="newsList">
            <h2 className="header">Сейчас в СМИ</h2>
            <News 
                icon={'https://avatars.dzeninfra.ru/get-ynews-logo/28627/254083361-1516267195536-square/logo-square'}
                title={'Какая-то новость 1 Какая-то новость 1 Какая-то новость 1 Какая-то новость 1'}
            />
            <News 
                icon={'https://avatars.dzeninfra.ru/get-ynews-logo/41096/1040-1640775230584-square/logo-square'}
                title={'Какая-то новость 2 Какая-то новость 2'}
            />
            <News 
                icon={'https://avatars.dzeninfra.ru/get-ynews-logo/61287/3009-1575449169494-square/logo-square'}
                title={'Какая-то новость 3'}
            />
            <News 
                icon={'https://avatars.dzeninfra.ru/get-ynews-logo/28627/254083361-1516267195536-square/logo-square'}
                title={'Какая-то новость 4 Какая-то новость 4 Какая-то новость 4'}
            />
            <News 
                icon={'https://avatars.dzeninfra.ru/get-ynews-logo/61287/3009-1575449169494-square/logo-square'}
                title={'Какая-то новость 5 Какая-то новость 5 Какая-то новость 5 Какая-то новость 5 Какая-то новость 5'}
            />
        </div>
    )
}

export default NewsList