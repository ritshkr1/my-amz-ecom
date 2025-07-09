 styles: [`
    /* app-layout.component.css */

.app-window {
  height:99.5vh;
  width:auto;
  margin: 0 auto;
  display: grid;
  grid-template-areas:
    "header"
    "content"
    "footer";
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  background: #fff;
}

.app-header {
  grid-area: header;
  position: sticky;
  top: 0;
  z-index: 100;
  background: #f8f8f8;
}

.app-footer {
  grid-area: footer;
  position: sticky;
  bottom: 0;
  background: #f1f1f1;
}

.shop-content {
  grid-area: content;
  overflow-y: auto;
}

.content-wrapper {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  height: 100%;
}

.shop-sidebar {
  width: 250px;
  margin-left: 0; /* right sidebar */
  background: #eee;
}

.main-area {
  flex: 1;
}
`]
