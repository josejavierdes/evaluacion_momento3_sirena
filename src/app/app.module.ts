import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HairComponent } from './hair/hair.component';
import { FaceComponent } from './face/face.component';
import { ChestComponent } from './chest/chest.component';
import { ArmsComponent } from './arms/arms.component';
import { ForearmsComponent } from './forearms/forearms.component';
import { HandsComponent } from './hands/hands.component';
import { NeckComponent } from './neck/neck.component';
import { StomachComponent } from './stomach/stomach.component';
import { ScalesComponent } from './scales/scales.component';
import { FinComponent } from './fin/fin.component';
import { HairRootComponent } from './hair/hair-root/hair-root.component';
import { ExternalHairComponent } from './hair/external-hair/external-hair.component';
import { EyesComponent } from './face/eyes/eyes.component';
import { NoseComponent } from './face/nose/nose.component';
import { MouthComponent } from './face/mouth/mouth.component';
import { SkinComponent } from './neck/skin/skin.component';
import { ThroatComponent } from './neck/throat/throat.component';
import { BoobsComponent } from './chest/boobs/boobs.component';
import { HeartComponent } from './chest/heart/heart.component';
import { VainsComponent } from './arms/vains/vains.component';
import { BonesComponent } from './arms/bones/bones.component';
import { MusclesComponent } from './forearms/muscles/muscles.component';
import { ArteriesComponent } from './forearms/arteries/arteries.component';
import { FingersComponent } from './hands/fingers/fingers.component';
import { NailsComponent } from './hands/nails/nails.component';
import { IntestinsComponent } from './stomach/intestins/intestins.component';
import { FoodComponent } from './stomach/food/food.component';
import { FocusComponent } from './scales/focus/focus.component';
import { RostralEndComponent } from './scales/rostral-end/rostral-end.component';
import { SpinesComponent } from './fin/spines/spines.component';
import { OuterSkinComponent } from './fin/outer-skin/outer-skin.component';

@NgModule({
  declarations: [
    AppComponent,
    HairComponent,
    FaceComponent,
    ChestComponent,
    ArmsComponent,
    ForearmsComponent,
    HandsComponent,
    NeckComponent,
    StomachComponent,
    ScalesComponent,
    FinComponent,
    HairRootComponent,
    ExternalHairComponent,
    EyesComponent,
    NoseComponent,
    MouthComponent,
    SkinComponent,
    ThroatComponent,
    BoobsComponent,
    HeartComponent,
    VainsComponent,
    BonesComponent,
    MusclesComponent,
    ArteriesComponent,
    FingersComponent,
    NailsComponent,
    IntestinsComponent,
    FoodComponent,
    FocusComponent,
    RostralEndComponent,
    SpinesComponent,
    OuterSkinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
