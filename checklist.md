### ✅ Week 1 – Phase 1: Storefront UI + Angular Basics
🎯 Goal: Core browsing experience + Level 1 topics
🗓️ Deadline: **Sunday night - 13 July 2025**

🔧 Setup & Angular Foundations
 Create new Angular project via CLI

 Clean up boilerplate files

 Setup SCSS or preferred styling setup

 Set up folder structure: core, shared, features

📦 Components & Pages
 HeaderComponent with nav (Products, Cart, Login)

 ProductListComponent (cards in grid layout)

 ProductCardComponent (Input product data)

 ProductDetailComponent (route by :id)

🔄 Data & Services
 Create mock products.json or use JSON Server

 Create ProductService with getProducts() and getProductById(id)

 Use HttpClientModule and test GET requests

 Display product data using *ngFor, pipes

🧠 Concepts to Practice
 Interpolation, Property Binding, Event Binding

 @Input() and @Output() (child–parent data)

 Built-in directives: *ngIf, *ngFor, ngSwitch

 Built-in pipe (date, currency) and one custom pipe

 Use ngClass and ngStyle for basic styling logic

 Organize AppModule, ProductModule, SharedModule

🎯 Ship Deliverable
 Deploy app (Netlify/Vercel/Firebase)

 GitHub push with README

 Screenshots or short Loom recording for reference

 LinkedIn/Portfolio post: "Phase 1: Browse & Discover live!"

✅ Week 2 – Phase 2: Cart, Wishlist, Forms, RxJS, Routing
🎯 Goal: Interaction + Level 2–5 concepts
🗓️ Deadline: Sunday night (Week 2)

🛒 Cart & Wishlist
 Create CartService using BehaviorSubject

 Add-to-cart button updates global cart

 CartPageComponent – list items, quantity edit, remove

 Show total price in cart

 Persist cart in localStorage

 Create WishlistService (optional)

📦 Reactive Forms & Checkout
 Create CheckoutComponent

 Use FormGroup, FormControl, or FormBuilder

 Add address, email, phone fields

 Add validations (required, minLength, etc.)

 Show form errors dynamically

🔁 RxJS Practice
 Add search box to product list

 Debounce user input using RxJS (debounceTime)

 Use switchMap, map for filtering logic

 Display loading spinner using a Subject-based service

🌐 Routing & Guards
 Add /cart, /wishlist, /checkout routes

 Use RouterModule + RouterLink

 Create dummy AuthGuard for now (block checkout if not logged in)

 Use ActivatedRoute to get product id

🎯 Ship Deliverable
 Cart fully working with persistent state

 Checkout page functional with validations

 Filtering/searching with debounce

 Dummy route guards for checkout

✅ Week 3 – Phase 3: Auth, Admin Preview, State Management, Polish
🎯 Goal: Authentication + State + Finishing Touches
🗓️ Deadline: Sunday night (Week 3 – final showcase)

🔐 Authentication
 Create AuthService with login/register logic

 Store JWT (mock token) in localStorage

 Add AuthGuard for checkout/cart

 LoginComponent and RegisterComponent with validation

 Update navbar based on login status

 Add Logout button functionality

🛠 Admin Preview (Optional)
 Create AdminDashboardComponent

 Dummy links for “Add Product”, “Manage Orders”

 Protect with role-based access (mocked)

 RouteGuard for admin section

📦 State Management (Basic)
 Move cart logic to NgRx OR enhance existing RxJS service

 Add loading state using a shared Subject (loadingService)

 Add error handling with catchError in HTTP

🎨 UI Polish
 Add toast notifications (success, error)

 Add skeleton loader (custom directive or placeholder)

 404 page route

 Responsive fixes & UI consistency

 Optional: Add Angular Material (dialog, buttons)

🧪 Testing (Mini)
 Test one service (e.g. ProductService)

 Write one component unit test

🎯 Final Deliverable
 Deploy final version

 Polish README with all features

 Record short Loom walkthrough

 Update LinkedIn + Portfolio site with full project

Bonus If Time Permits:
Use Firebase or NestJS backend for product/cart APIs

Add stripe mock or real payment

Use Angular Universal for SSR or SEO

