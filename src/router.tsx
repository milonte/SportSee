import { createBrowserRouter } from "react-router-dom";
import { getUserMainDatas } from "./Api";
import App from "./App";
import Error from "./Error";

console.log(process.env)

const router = createBrowserRouter([
    {
        path: "/:userId",
        element: <App />,
        errorElement: <Error />,
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