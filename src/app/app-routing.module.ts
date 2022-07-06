import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Dairy1Component } from './common/dairy1/dairy1.component';
import { ImageOnlyComponent } from './common/image-only/image-only.component';
import { ImageTextComponent } from './common/image-text/image-text.component';
import { ImgTextComponent } from './common/img-text/img-text.component';
import { MenuComponent } from './common/menu/menu.component';
import { RowReverseComponent } from './common/row-reverse/row-reverse.component';
import { StartComponent } from './common/start/start.component';
import { TableComponent } from './common/table/table.component';
import { TextBlockComponent } from './common/text-block/text-block.component';
import { TextFullimageComponent } from './common/text-fullimage/text-fullimage.component';
import { TextImageComponent } from './common/text-image/text-image.component';
import { TitlecardComponent } from './common/titlecard/titlecard.component';
import { VideoComponent } from './common/video/video.component';
import { M2NotepadComponent } from './pages/m2-notepad/m2-notepad.component';
import { M2CaseComponent } from './pages/m2/m2-case/m2-case.component';
import { M2Page14Component } from './pages/m2/m2-page14/m2-page14.component';
import { M2Page15Component } from './pages/m2/m2-page15/m2-page15.component';
import { M2Page16Component } from './pages/m2/m2-page16/m2-page16.component';
import { M2Page36Component } from './pages/m2/m2-page36/m2-page36.component';
import { M2SolutionComponent } from './pages/m2/m2-solution/m2-solution.component';
import { M2Solution1Component } from './pages/m2/m2-solution1/m2-solution1.component';
import { M3PopUpComponent } from './pages/m3-pop-up/m3-pop-up.component';


const routes: Routes = [
  {
    path: "start/:id",
    component: StartComponent 
  },
  {
    path: "thankyou/:id",
    component: StartComponent
  },
  {
    path: "text/:id",
    component: TextBlockComponent
  },
  {
    path: "video/:id",
    component: VideoComponent
  },
  {
    path: "reverse/:id",
    component: RowReverseComponent
  },
  {
    path: "images/:id",
    component: ImageOnlyComponent
  },
  {
    path: "textimage/:id",
    component: TextImageComponent
  },
  {
    path: "text-fullimage/:id",
    component: TextFullimageComponent
  },
  {
    path: "table/:id",
    component: TableComponent
  },
  {
    path: "titlecard/:id",
    component: TitlecardComponent
  },
  {
    path: "menu",
    component: MenuComponent
  },
  {
    path: "dairy1/:id",
    component: Dairy1Component
  },
  {
    path: "m2/m2-page14/:id",
    component:M2Page14Component
  },
  { 
    path: "image-text/:id",
    component: ImageTextComponent
  },
 { 
  path: "m2/m2-page15/:id",
  component:M2Page15Component
},
{ 
  path: "m2/m2-page16/:id",
  component:M2Page16Component
},
{ 
  path: "m2/m2-notepad/:id",
  component:M2NotepadComponent
},
{ 
  path: "m3/m3-pop_up/:id",
  component:M3PopUpComponent
},
{ 
  path: "m2/m2-page36/:id", 
  component:M2Page36Component
},
{ 
  path: "m2/m2-case/:id",
  component:M2CaseComponent
},
{ 
  path: "m2/m2-solution/:id",
  component:M2SolutionComponent
},
{ 
  path: "m2/m2-solution1/:id",
  component:M2Solution1Component
},
{ 
  path: "img-text/:id",
  component:ImgTextComponent
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
