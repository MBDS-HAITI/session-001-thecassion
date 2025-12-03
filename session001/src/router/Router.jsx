import { useState, useEffect } from "react";

function Router({routes, defaultRoute}) {
    const [currentRoute, setCurrentRoute] = useState(window.location.hash || defaultRoute);

    useEffect(() => {
        const onHashChange = () => {
            setCurrentRoute(window.location.hash || defaultRoute);
        };
        window.addEventListener("hashchange", onHashChange);
        return () => {
            window.removeEventListener("hashchange", onHashChange);
        };
    }, []);
    const route = routes.find(r => r.path === currentRoute);
    if (!route) {
        return <div>404 - Page Not Found</div>;
    }
    return <route.component />;

}
export default Router;