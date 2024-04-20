// date format =>  "4/15/2024, 11:00:12 AM"

export default function useDateGenerator(date) {
    const d = new Date()
    const d1 = new Date(date)
    const persian = { 0: "۰", 1: "۱", 2: "۲", 3: "۳", 4: "۴", 5: "۵", 6: "۶", 7: "۷", 8: "۸", 9: "۹" };
    const prevent = {
        year: d1.getFullYear(),
        month: d1.getMonth(),
        day: d1.getDate(),
        hr: d1.getHours(),
        min: d1.getMinutes()
    }
    const now = {
        year: d.getFullYear(),
        month: d.getMonth(),
        day: d.getDate(),
        hr: d.getHours(),
        min: d.getMinutes()
    }
    
    if (prevent.year == now.year && prevent.month == now.month && prevent.day == now.day) {
        let deltaT = 60 * (now.hr - prevent.hr) + (now.min - prevent.min);
        if (deltaT < 15) return 'دقایقی پیش';
        else if (deltaT >= 15 && deltaT <= 45) return 'نیم‌ساعت پیش';
        else if (deltaT > 45 && deltaT <= 75) return 'یک ساعت پیش';
        else {
            let m = String(Math.ceil(deltaT / 60)).split();
            m = m.map(i => persian[i]).join()
            return `${m} ساعت پیش`;
        }

    } else {
        let deltaD = 365 * (now.year - prevent.year) + 30 * (now.month - prevent.month) + (now.day - prevent.day)

        if (deltaD < 7) return `${persian[deltaD]} روز پیش`;
        else if (deltaD >= 7 && deltaD < 30) return `${persian[Math.round(deltaD / 7)]} هفته پیش`;
        else if (deltaD >= 30 && deltaD < 365) {
            let m = String(Math.round(deltaD / 30)).split();
            m = m.map(i => persian[i]).join()
            return `${m} ماه پیش`;
        } else return `${persian[Math.round(deltaD / 365)]} سال پیش`;



    }
}
