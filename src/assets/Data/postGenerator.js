const a = 'z2HOZ14Hxc5v68J8bnGHXmJa4I8A46s1F40g8F9d0DfSdfgK1A23ghU5CPj2LQkd31j5lWpME5oViRuy6tTNr3eYwq'.split('')
const pr = [1850000, 500000, 2000000, 8300000, 50000, 985000, 4200000, 730000, 6666000, 1230000, 3333000, 200000, 130000, 85000, 3650000]
const Category_List = ['گیربکس', 'جلوبندی', 'لوازم برقی', 'لوازم موتور', 'بدنه', 'لاستیک و رینک']


export function getPosts(n){
    const tmax = new Date().getTime()
    const tmin = tmax - 100000000
    const post_array = new Array(n).fill().map((e, j) => {
        return {
            id: `KpT${110 + j}`,
            userID: random(101, 1),
            title: 'آگهی شماره ' + (j + 1),
            price: pr[random(14)],
            category: Category_List[random(5)],
            images:[],
            creatDate: new Date(random(tmax,tmin)).toLocaleString()
        }
    })

    return post_array
}

function random(max, min = 0) {
    return Math.floor(Math.random() * (max - min)) + min;
}
