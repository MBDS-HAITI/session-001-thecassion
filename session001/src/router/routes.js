import {Home as HomePage, Notes as NotesPage, Students as StudentsPage, Subjects as MatieresPage, About as AboutPage} from '../pages';

export const routes = [
    {path: '#home', component: HomePage},
    {path: '#notes', component: NotesPage},
    {path: '#students', component: StudentsPage},
    {path: '#matieres', component: MatieresPage},
    {path: '#about', component: AboutPage},
]