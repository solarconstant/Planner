const initState = {
    projects: [
        {id : '1', title: 'Frontend Development', content: 'Use Sass and Tailwind to do stuff.'},
        {id : '2', title: 'Authorization', content: 'Use Firebase inbuilt auth.'},
        {id : '3', title: 'Database', content: 'Use firestore.'}
    ]
}

const projectReducer = (state = initState, action) =>
{
    return state;
}

export default projectReducer;