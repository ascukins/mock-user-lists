import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserListJsonPlaceholderComponent } from './components/pages/user-list-json-placeholder/user-list-json-placeholder.component';
import { UserListReqResComponent } from './components/pages/user-list-req-res/user-list-req-res.component';
import * as fromAppState from './store';
import { ErrorMessageComponent } from './components/shared/error-message/error-message.component';
import { LoadingMessageComponent } from './components/shared/loading-message/loading-message.component';
import { CardGridComponent } from './components/shared/card-grid/card-grid.component';
import { JpUserCardComponent } from './components/shared/jp-user-card/jp-user-card.component';
import { ReqresUserCardComponent } from './components/shared/reqres-user-card/reqres-user-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserListJsonPlaceholderComponent,
    UserListReqResComponent,
    ErrorMessageComponent,
    LoadingMessageComponent,
    CardGridComponent,
    JpUserCardComponent,
    ReqresUserCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(fromAppState.appReducers),
    EffectsModule.forRoot(fromAppState.appStoreEffects),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
