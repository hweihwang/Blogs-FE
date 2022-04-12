import {NextPage} from "next";
import {useRouter} from "next/router";

const TodoDetailPage: NextPage = () => {
    const router = useRouter();
    const {id} = router.query;

    return (<div>
        <p>Todo ID: {id}</p>
    </div>)
};

export default TodoDetailPage;
