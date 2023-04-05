import { createBrowserRouter } from "react-router-dom";
import { getUserMainDatas } from "./Api";
import App from "./App";
import Error from "./Error";

const router = createBrowserRouter([
    {
        path: "/:userId",
        element: <App />,
        errorElement: <Error />,
        loader: ({ params }) => {
            if (!params.userId) {

                throw new Response("Bad Request", { status: 404 })
            }
            const data = params.userId ? getUserMainDatas(params.userId) : null

            if (null === data) {
                console.log('error')
                throw new Response("Bad Request", { status: 404 })
            }
            return data;

        }
    }
]);

export default router;