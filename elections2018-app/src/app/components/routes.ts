import { AppComponent } from './../app.component';

export const routes = [{
	path: "",
	component: AppComponent,
	children: [
		{ path: "", redirectTo: "home", pathMatch: "full" },
		{ path: "home", loadChildren: "./home/home.module#HomeModule" },
		{ path: "versus-analysis", loadChildren: "./versus-analysis/versus-analysis.module#VersusAnalysisModule" },
		{ path: "grafica", loadChildren: "./example-grafica/example-grafica.module#ExampleGraficaModule" }

	]
}, {
	// Page not found.
	path: "**", redirectTo: "home"
}];
