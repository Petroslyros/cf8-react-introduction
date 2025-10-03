// import ViteIntro from "./components/ViteIntro/ViteIntro.tsx"
// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
// import Card from "./components/Card.tsx";
import Layout from "./components/Layout.tsx";
import WindowSize from "./components/WindowSize.tsx";
// import Timer from "./components/Timer.tsx";
// import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
// import NameChangerWithEffect from "./components/NameChangerWithEffect.tsx";
// import {useEffect} from "react";
// import {useEffect} from "react";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
// import Counter from "./components/Counter.tsx";
// import NameChanger from "./components/NameChanger.tsx";
// import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";
// import CounterAdvanced from "./components/CounterAdvanced.tsx";

function App() {

    // useEffect(() => {
    //     const id = setInterval(() => console.log("tick"), 1000)
    //     return() => clearInterval(id);
    // }, [])

    // useEffect(() => {
    //     let counter : number = 1;
    //     const id : number = setInterval(() => {
    //         console.log(counter++);
    //     }, 1000)
    //     return () => clearInterval(id);
    // }, []);

  return (
    <>
{/*        <ClassComponent/>*/}
{/*        <FunctionalComponent/>*/}
{/*        <ArrowFunctionalComponent/>*/}
{/*        <ArrowFunctionalComponentWithProps  title="Is an Arrow Functional Component with Props"/>*/}
{/*        <ArrowFunctionalComponentWithProps  title="2nd title"/>*/}
{/*        <ArrowFunctionalComponentWithPropsType title="Is an Arrow Functional Component with 2 props" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, sunt.*/}
{/*"/>*/}
{/*        <Card title="Card">*/}
{/*            <ArrowFunctionalComponentWithPropsType title="Is an Arrow Functional Component with 2 props" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, sunt.*/}
{/*"/>*/}
{/*        </Card>*/}
        <Layout>
           {/*<ArrowFunctionalComponentWithPropsType title="Title" description="Description"/>*/}
           {/*<FunctionalComponentWithState />*/}
           {/*<Counter />*/}
           {/*<NameChanger/>*/}
           {/* <CounterWithMoreStates/>*/}
           {/* <CounterAdvanced/>*/}
           {/* <CounterWithCustomHook/>*/}
           {/* <NameChangerWithEffect/>*/}
           {/* <Timer/>*/}
            <WindowSize/>
        </Layout>



    </>
  )
}

export default App
