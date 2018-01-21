@extends('layouts.overseas')

@section('title')
    Study Overseas
@endsection

@section('content')
    <div class="preloader ball-pulse">
        <div class="loader">
            <div class="ball"></div>
        </div>
    </div>
	<section id="locations" class="locations">
		<div class="container">
			<div class="row">
				<div class="col-md-3 col-md-offset-9">
					<div class="section_title">
						<h3>study overseas</h3>
					</div>
				</div>
			</div>
			<div class="map-row">
                <div class="google-map">
                    <img src="img/map.png" alt="">
                    <div class="hotspot-wrap">
                        <div class="hotspot-item" data-top="15%" data-left="15%">
                            <span class="hotspot" data-toggle="tooltip" data-placement="top" title="CANADA">
                                <span class="hotspot-point"></span>                            
                            </span>
                        </div>
                        <div class="hotspot-item" data-top="35%" data-left="20%">
                            <span class="hotspot" data-toggle="tooltip" data-placement="top" title="USA">
                                <span class="hotspot-point"></span>                            
                            </span>
                        </div>
                        <div class="hotspot-item" data-top="25%" data-left="45%">
                            <span class="hotspot" data-toggle="tooltip" data-placement="top" title="UK">
                                <span class="hotspot-point"></span>                            
                            </span>
                        </div>
                        <div class="hotspot-item" data-top="32%" data-left="50%">
                            <span class="hotspot" data-toggle="tooltip" data-placement="top" title="NETHERLANDS">
                                <span class="hotspot-point"></span>                            
                            </span>
                        </div>
                        <div class="hotspot-item" data-top="28%" data-left="62%">
                            <a href="{{ url('study-overseas/switzerland') }}">
                                <span class="hotspot" data-toggle="tooltip" data-placement="top" title="SWITZERLAND">
                                    <span class="hotspot-point"></span>                            
                                </span>
                             </a>
                        </div>
                        <div class="hotspot-item" data-top="75%" data-left="85%">
                            <a href="{{ url('study-overseas/australia') }}">
                                <span class="hotspot" data-toggle="tooltip" data-placement="top" title="AUSTRALIA">
                                    <span class="hotspot-point"></span>                            
                                </span>
                            </a>
                        </div>
                    </div>
                </div>  
			</div>
		</div>
	</section>
@endsection