import {get, post} from "../utils/http";

export function login(data) {
    return post("/api-aus/oauth/manager/token", data, {
        contentLoading: false,
        globalLoading: true,
        headers: {
            "Authorization": "Basic bWFuYWdlX3BjOm1hbmFnZV9wYw=="
        }
    });
}

export function loginOut(config = {globalLoading: true, selfHandleErr: true}) {
    return get("/api-aus/oauth/remove/token", {}, config);
}
