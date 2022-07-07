import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextBlockComponent } from './common/text-block/text-block.component';
import { StartComponent } from './common/start/start.component';
import { NavigateComponent } from './common/navigate/navigate.component';
import { FooterComponent } from './common/footer/footer.component';
import { VideoComponent } from './common/video/video.component';
import { RowReverseComponent } from './common/row-reverse/row-reverse.component';
import { TextImageComponent } from './common/text-image/text-image.component';
import { ImageOnlyComponent } from './common/image-only/image-only.component';
import { TableComponent } from './common/table/table.component';
import { SafePipe } from './pipes/safe.pipe';

import { AudiofooterComponent } from './common/audiofooter/audiofooter.component';
import { MenuComponent } from './common/menu/menu.component';
import { TitlecardComponent } from './common/titlecard/titlecard.component';
import { TextFullimageComponent } from './common/text-fullimage/text-fullimage.component';
import { MobileMenuComponent } from './common/mobile-menu/mobile-menu.component';
import { Dairy1Component } from './common/dairy1/dairy1.component';

import { M2Page14Component } from './pages/m2/m2-page14/m2-page14.component';
import { ImageTextComponent } from './common/image-text/image-text.component';
import { M2Page15Component } from './pages/m2/m2-page15/m2-page15.component';
import { M2Page16Component } from './pages/m2/m2-page16/m2-page16.component';
import { M2Page36Component } from './pages/m2/m2-page36/m2-page36.component';
import { M2CaseComponent } from './pages/m2/m2-case/m2-case.component';
import { M2SolutionComponent } from './pages/m2/m2-solution/m2-solution.component';
import { M2Solution1Component } from './pages/m2/m2-solution1/m2-solution1.component';
import { M2NotepadComponent } from './pages/m2-notepad/m2-notepad.component';
import { ImgTextComponent } from './common/img-text/img-text.component';
import { M3PopUpComponent } from './pages/m3-pop-up/m3-pop-up.component';




@NgModule({
  declarations: [
  
    AppComponent,
    TextBlockComponent,
    StartComponent,
    NavigateComponent,
    FooterComponent,
    VideoComponent,
    RowReverseComponent,
    TextImageComponent,
    ImageOnlyComponent,
    TableComponent,
    SafePipe,
    AudiofooterComponent,
    MenuComponent,
    TitlecardComponent,
    TextFullimageComponent,
    MobileMenuComponent,
    Dairy1Component,
    
    M2Page14Component,
    
    ImageTextComponent,
    
    M2Page15Component,
    
    M2Page16Component,
    
    M2Page36Component,
    
    M2CaseComponent,
    
    M2SolutionComponent,
    
    M2Solution1Component,
    
    M2NotepadComponent,
    
    ImgTextComponent,
          M3PopUpComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
