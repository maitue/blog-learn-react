import React, {Suspense, lazy} from "react";
import { Switch ,Route} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const Tutorial = lazy(() => import('../javascript/Tutorial'));
const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}))
export default function Home() {
    const classes = useStyles();
    return (
        <Suspense fallback={<div> Loading....</div>}>
            <Switch>
                <Route path="/tutorial" component={Tutorial} />
            </Switch>
        </Suspense>
    )
}