export enum AppRoute {
    Main = '/',
    SignIn = '/login',
    MyList = '/mylist',
    Film = '/films/:id',
    AddReview = '/films/:id/review',
    Player = '/player/:id',
    NotFound = '*'
}

export enum AuthorizationStatus {
    Unknown = 'Unknown',
    Authorized = 'Authorized',
    Unauthorized = 'Unauthorized',
}

export enum EFilmPageTabs {
    Overview = 'Overview',
    Details = 'Details',
    Reviews = 'Reviews',
}

export enum ERatingDescription {
    Bad = 'Bad',
    Normal = 'Normal',
    Good = 'Good',
    VeryGood = 'Very good',
    Awesome = 'Awesome'
  }
