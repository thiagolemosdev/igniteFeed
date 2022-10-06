import { Post } from "./components/Post";
import { Sidebar } from "./components/SideBar";
import { Header } from "./components/Header";

import "./global.css";
import styles from "./App.module.css";

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          <Post
            autho="Thiago Lemos"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui assumenda neque, labore repudiandae facere ipsa libero tenetur debitis atque laborum numquam incidunt aut, facilis dolorem, asperiores unde sit ipsam possimus! "
          />
          <Post />
        </main>
      </div>
    </>
  );
}
