import { createBrowserRouter } from "react-router-dom";
import { getUserMainDatas } from "./Api";
import App from "./App";


const router = createBrowserRouter([
    {
        path: "/:userId",
        element: <App />,
        //errorElement: <ErrorPage />,
        loader: ({ params }) => {
            const data = params.userId ? getUserMainDatas(params.userId) : null

            if (!data) {
                throw new Response("", { status: 404 })
            }
            return data;

        }
    }
]);

export default router;