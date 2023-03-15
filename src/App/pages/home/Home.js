import React, {Suspense, lazy} from "react";
import { Switch ,Route} from "react-router-dom";

const Tutorial = lazy(() => import('../javascript/Tutorial'));

export default function Home() {
    return (
        <Suspense fallback={<div> Loading....</div>}>
            <Switch>
                <Route path="/tutorial" component={Tutorial} />
            </Switch>
        </Suspense>
    )
}