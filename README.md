# ng-ecommerce

This Angular repo will be used to build a full-featured e-commerce application.  
This README documents the base folder structure and planned setup steps.

------------------------------------------------------------
📁 /src/app

├── core/               => Singleton services, HTTP interceptors, route guards
│   - AuthService
│   - TokenInterceptor
│   - AuthGuard
│   - CoreModule
│
├── shared/             => Reusable components, pipes, directives
│   - SharedModule
│   - ButtonComponent
│   - CardComponent
│
├── features/           => Feature modules for business logic
│   ├── home/
│   ├── product/
│   ├── cart/
│   └── user/
│
├── layouts/            => App layouts (e.g., main layout, auth layout)
│   - HeaderComponent
│   - FooterComponent
│   - MainLayoutComponent
│   - AuthLayoutComponent
│
├── app-routing.module.ts  => App-level routes
├── app.module.ts          => Root module
├── app.component.ts       => Root component
└── app.component.html     => App shell

------------------------------------------------------------
📁 /src

├── environments/
│   - environment.ts
│   - environment.prod.ts

├── styles.scss           => Global styles and theme setup (using SCSS)
│   - Define SCSS variables here for color, font, etc.

------------------------------------------------------------
✅ Planned Initial Tasks (Next Steps)

- [ ] Setup Angular Material + Flex Layout
- [ ] Create CoreModule and SharedModule
- [ ] Create HomeModule (lazy-loaded route)
- [ ] Add dummy Header/Footer in layouts
- [ ] Setup routing with layout support
- [ ] Add environment config for API base URL
- [ ] Add ngx-toastr and uuid for utility support
- [ ] ESLint + Prettier integration

------------------------------------------------------------
📝 Quick Notes

- App follows modular structure for maintainability
- SCSS is used for better theming and organization
- Routes will be lazy-loaded for performance
- CoreModule is imported **only** in AppModule
- SharedModule can be reused across features

------------------------------------------------------------
🔧 Commands Used to Generate Base Setup

ng new ng-ecommerce --routing --style=scss  
cd ng-ecommerce  
ng g module core  
ng g module shared  
ng g c layouts/main-layout  
ng g c layouts/auth-layout  
ng add @angular/material  
npm install @angular/flex-layout ngx-toastr uuid

------------------------------------------------------------
# End of Base Setup
