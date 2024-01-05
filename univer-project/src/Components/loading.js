import 'bootstrap/dist/css/bootstrap.min.css'
import "../Styles/MainStyle.css"
import "../Styles/loading.css"

function Loading() {
  return (
    <div class="lds-ring">
        <div></div><div></div><div></div><div></div>
    </div>
  );
}

export default Loading;