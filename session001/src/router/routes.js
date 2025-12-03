import {Home as HomePage, Notes as NotesPage, Students as StudentsPage, Subjects, About as AboutPage} from '../pages';

export const routes = [
    {path: '#home', component: HomePage},
    {path: '#notes', component: NotesPage},
    {path: '#students', component: StudentsPage},
    {path: '#subjects', component: Subjects},
    {path: '#about', component: AboutPage},
]