const Category_List = ['گیربکس', 'جلوبندی', 'لوازم برقی', 'لوازم موتور', 'بدنه', 'لاستیک و رینک']
const a = 'z2HOZ14Hxc5v68J8bnGHXmJa4I8A46s1F40g8F9d0DfSdfgK1A23ghU5CPj2LQkd31j5lWpME5oViRuy6tTNr3eYwq'.split('')
const pr = [1850000, 500000, 2000000, 8300000, 50000, 985000, 4200000, 730000, 6666000, 1230000, 3333000, 200000, 130000, 85000, 3650000]

export function getPosts(n) {
    let ID_list = []
    let e = true;
    while (e) {
        let id = idgenerate()
        if (!ID_list.includes(id)) {
            ID_list.push(id)
        }
        if (ID_list.length == n) {
            e = false;
            break
        };
    }
    const post_array = new Array(n).fill().map((e, j) => {
        return {
            id: ID_list[j],
            userID: random(101, 1),
            title: 'آگهی شماره ' + (j + 1),
            price: pr[random(14)],
            category: Category_List[random(5)],
        }
    })

    return Array.from(post_array)
}
export function idgenerate() {
    let id = [];
    let e = true;
    while (e) {
        let i = random(a.length - 1)
        id.push(a[i])
        if (id.length == 8) {
            e = false;
            break
        };
    }

    return id.join('')
}
function random(max, min = 0) {
    return Math.floor(Math.random() * (max - min)) + min;
}
