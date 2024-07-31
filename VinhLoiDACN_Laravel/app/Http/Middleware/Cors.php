<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class Cors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        // Check if it's a preflight request
        if ($request->isMethod('OPTIONS')) {
            // Check if there's a redirect in the preflight request
            if ($request->headers->has('Origin') && $request->headers->has('Access-Control-Request-Headers')) {
                // Prepare the CORS response
                $response = response('', 200);
                $response->headers->set('Access-Control-Allow-Origin', $request->headers->get('Origin'));
                $response->headers->set('Access-Control-Allow-Headers', $request->headers->get('Access-Control-Request-Headers'));
                $response->headers->set('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
                $response->headers->set('Access-Control-Max-Age', 3600);

                return $response;
            }
        }

        $response = $next($request);

        // Add CORS headers to the response
        $response->headers->set('Access-Control-Allow-Origin', '*');
        $response->headers->set('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token, Authorization, Accept, Option, X-CSRF-TOKEN, X-Requested-With');
        $response->headers->set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');

        return $response;
    }
}