import React, {Suspense, lazy} from "react";
import { Switch ,Route} from "react-router-dom";


export default function Home() {
    return (
        <Suspense fallback="..loading">
            <Switch>

            </Switch>
        </Suspense>
    )
}