import { url } from "inspector";
import { Link } from "lucide-react";
import React from "react";
import { URL } from "url";

function page() {
  return (
    <div>
      <div className="min-w-screen flex min-h-screen items-center justify-center bg-fixed">
        <span className="text-5xl font-bold">Conheça nossa história</span>
      </div>
      <div className="min-w-screen flex min-h-screen flex-col items-center justify-center bg-blue-100 bg-fixed">
        <span className="text-md p-20 text-justify font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod
          dui arcu, et feugiat tellus dictum nec. Curabitur id lorem vitae erat
          tristique malesuada. Etiam eget velit diam. Aliquam sed dui fermentum,
          rutrum ipsum sit amet, sodales metus. Integer sagittis tempor neque,
          sed cursus magna bibendum et. Aenean et molestie dolor. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Quisque volutpat ipsum quis lorem convallis, in cursus magna
          posuere. Donec et consequat ex. In augue eros, suscipit pulvinar
          viverra in, vehicula eget dolor. Nunc quam justo, gravida nec arcu
          non, semper molestie ipsum. Sed scelerisque dolor sit amet nulla
          facilisis mattis. Vestibulum sit amet metus malesuada, ultricies dolor
          a, gravida neque. Suspendisse vitae viverra eros. Nunc dictum nunc eu
          eros sollicitudin, sit amet sagittis ligula maximus. Phasellus quis
          placerat nulla. Sed lacinia, dolor posuere pretium cursus, quam diam
          laoreet eros, eget ultricies turpis massa ac neque. Etiam diam dui,
          eleifend quis commodo varius, sollicitudin in libero. Mauris vel
          consequat orci, eu mollis sem. Nulla eget convallis tellus. Vivamus
          viverra sem metus, eu malesuada augue aliquet eget. Quisque vel auctor
          justo. Maecenas non commodo orci. Fusce erat purus, consectetur sit
          amet pretium facilisis, tincidunt sed tellus. Nam rhoncus maximus
          lobortis. Fusce luctus, nibh a consectetur congue, turpis felis porta
          ex, id fermentum arcu nibh vel felis. Vivamus vestibulum tristique
          eros at imperdiet. Aliquam erat volutpat. Vestibulum eu quam
          elementum, congue turpis quis, rhoncus nunc. Maecenas nec ligula nisi.
          Vivamus finibus magna in nisl posuere laoreet. In interdum magna vitae
          lacus ullamcorper maximus. Sed consectetur magna et ex fermentum
          tempus. Nullam non fringilla lorem, ut mollis neque. Sed consequat
          turpis convallis feugiat posuere. In sollicitudin tincidunt felis at
          blandit. Nulla facilisi. Integer vulputate nibh mauris, sed ultricies
          eros dapibus id. Integer ultricies risus a varius mattis. Morbi id
          magna ultricies purus mattis pellentesque. Suspendisse vehicula nibh
          enim. Nam condimentum varius lacinia. Morbi et tellus sapien. In
          imperdiet, urna eu interdum dictum, turpis elit tempus massa, non
          posuere orci neque eget est. Nunc id mi elit. Donec tristique est
          nisl, sed tincidunt turpis auctor sit amet. Cras ut risus lacus. Cras
          auctor nisl vel dui egestas mollis. Vestibulum facilisis vel urna quis
          molestie. Proin sapien libero, aliquet eget feugiat nec, pellentesque
          laoreet nisi. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Fusce ac imperdiet mauris, in
          tincidunt turpis. Integer rhoncus interdum mattis. Integer interdum
          neque vitae sagittis accumsan.
        </span>
        <div>
          <button className="text-md rounded-3xl border border-blue-500 bg-blue-400 px-8 py-3 font-semibold text-slate-950 shadow-xl duration-200 hover:scale-110">
            Veja nossas decorações
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;
