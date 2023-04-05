import { createBrowserRouter } from "react-router-dom";
import { getUserMainDatas } from "./Api";
import App from "./App";
import ErrorPage from "./ErrorPage";
import Dashboard from "./Dashboard";

const NewErrorResponse = (message: string) => new Response(message, { status: 404 })

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        loader: ({ params }) => {
            if (undefined === params.userId) {
                throw NewErrorResponse("Bad Request: No Route")
            } else {
                return true // if an User param is defined, continue
            }
        },
        children: [{
            index: true,
            path: "/:userId",
            element: <Dashboard />,
            loader: async ({ params }) => {
                if (params.userId) {
                    const data = await Promise.resolve(getUserMainDatas(params.userId))
                        .then((result) => { return result; });
                    if (undefined === data) {
                        throw NewErrorResponse("Bad Request: No User")
                    }
                    return data;
                }
                throw NewErrorResponse("Bad Request: No User")
            }
        },]

    }
]);

export default router;