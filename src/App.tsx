
// import ViteIntro from "./components/ViteIntro/ViteIntro.tsx"

// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
// import Card from "./components/Card.tsx";

import Layout from "./components/Layout.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
// import Counter from "./components/Counter.tsx";
import NameChanger from "./components/NameChanger.tsx";

function App() {


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
           <NameChanger/>
        </Layout>


    </>
  )
}

export default App
