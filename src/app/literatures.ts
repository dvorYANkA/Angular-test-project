export interface Literature{
    id: number;
    author: String;
    form: number,
    subject: string;
    linkToSource: string;
    isDeepStuding: boolean;
    deadlineQtyDaysOnLearn: number,
}

export const literatures = [
    {
        id: 1,
        author: 'Merzliak',
        form: 7,
        subject: 'Algebra',
        linkToSource: 'https://pidruchnyk.com.ua/764-algebra-7-merzlyak-2015.html',
        isDeepStuding: false,
        deadlineQtyDaysOnLearn: 10,
    },
    {
        id: 2,
        author: 'Merzliak',
        form: 8,
        subject: 'Algebra',
        linkToSource: 'https://pidruchnyk.com.ua/793-algebra-merzlyak-8-klas-2016.html',
        isDeepStuding: false,
        deadlineQtyDaysOnLearn: 20,
    },
    {
        id: 3,
        author: 'Merzliak',
        form: 9,
        subject: 'Algebra',
        linkToSource: 'https://pidruchnyk.com.ua/982-algebra-merzlyak-9-klas-2017.html',
        isDeepStuding: false,
        deadlineQtyDaysOnLearn: 40,
    },
    {
        id: 4,
        author: 'Merzliak',
        form: 9,
        subject: 'Geomertry',
        linkToSource: 'https://pidruchnyk.com.ua/996-geometriya-merzlyak-9-klas-2017.html',
        isDeepStuding: false,
        deadlineQtyDaysOnLearn: 15
    },
    {
        id: 5,
        author: 'Merzliak',
        form: 10,
        subject: 'Geomertry',   
        linkToSource: 'https://pidruchnyk.com.ua/1138-geometriya-10-klas-merzlyak-poglyb.html',
        isDeepStuding: true,
        deadlineQtyDaysOnLearn: 50,
    }
]