// import ViteIntro from "./components/ViteIntro/ViteIntro.tsx"
// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
// import Card from "./components/Card.tsx";
// import Layout from "../../cf8-react-todo-app/src/layout/Layout.tsx";
// import PreviousValue from "./components/PreviousValue.tsx";
// import CounterWithRef from "./components/CounterWithRef.tsx";
// import {useEffect} from "react";
// import FocusInput from "./components/FocusInput.tsx";
// import WindowSize from "./components/WindowSize.tsx";
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
import {BrowserRouter, Route, Routes} from "react-router";
import NameChanger from "./components/NameChanger.tsx";
import HomePage from "./pages/HomePage.tsx";
import Timer from "./components/Timer.tsx";
import RouterLayout from "./components/RouterLayout.tsx";
// import path from "path";
import UserPage from "./components/UserPage.tsx";
import ControlledInput from "./components/ControlledInput.tsx";
import UncontrolledInput from "./components/UncontrolledInput.tsx";
import MultifieldForm from "./components/MultifieldForm.tsx";
import MultifieldFormWithValidation from "./components/MultifieldFormWithValidation.tsx";
import MultifieldFormWithZod from "./components/MultifieldFormWithZod.tsx";



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
    // useEffect(() => {
    //     history.pushState({page: 1}, "", "/page")
    //     history.replaceState({page: 1}, "", "/page1");
    //
    //     window.onpopstate = (e) => {
    //         console.log(e.state);
    //     }
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
{/*        <Layout>*/}
           {/*<ArrowFunctionalComponentWithPropsType title="Title" description="Description"/>*/}
           {/*<FunctionalComponentWithState />*/}
           {/*<Counter />*/}
           {/*<NameChanger/>*/}
           {/* <CounterWithMoreStates/>*/}
           {/* <CounterAdvanced/>*/}
           {/* <CounterWithCustomHook/>*/}
           {/* <NameChangerWithEffect/>*/}
           {/* <Timer/>*/}
           {/* <WindowSize/>*/}
           {/* <FocusInput/>*/}
           {/* <PreviousValue/>*/}
           {/* <CounterWithRef/>*/}
        {/*</Layout>*/}

    <BrowserRouter >
       <Routes>
           <Route index element={<HomePage/>} />
         {/*<Route path="name-changer" element={<NameChanger/>}/>*/}
         {/*  <Route path="time" element={<Timer/>} />*/}
        <Route path="examples">
            <Route path="name-changer" element={<NameChanger/>}/>
            <Route path="timer" element={<Timer/>}/>
            <Route path="controlled-input" element={<ControlledInput/>}/>
            <Route path="uncontrolled-input" element={<UncontrolledInput/>}/>
            <Route path="multifield-form" element={<MultifieldForm/>}/>
            <Route path="multifield-form" element={<MultifieldFormWithValidation/>}/>
            <Route path="multifield-form" element={<MultifieldFormWithZod/>}/>

        </Route>

           {/*<Route path="users/:userId" element={UserPage/>}/>*/}

           {/*<Route path="files/*" element={<FilePage />} />*/}

           <Route element={<RouterLayout/>}>
            <Route path="users">
            <Route path=":userId">
                <Route index element={<UserPage/>}/>
                {/*<Route path="accounts" element={<UserAccountsPage/>}/>*/}
            </Route>
             </Route>

        </Route>

       </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
