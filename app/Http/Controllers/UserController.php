<?php

namespace App\Http\Controllers;

use App\Models\User;
use Barryvdh\DomPDF\Facade\Pdf;
use Endroid\QrCode\Builder\Builder;
use Endroid\QrCode\Writer\BinaryWriter;
use Endroid\QrCode\Writer\SvgWriter;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Yajra\DataTables\DataTables;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = User::all();
        return Inertia::render('Users/Index', [
            'users' => $user,
        ]);
    }

    public function datatable(Request $request)
    {
        $users = User::query();

        return DataTables::of($users)
            ->make();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function makePdf($id)
    {
        $user = \App\Models\User::findOrFail($id);
        $qr = Builder::create()
            ->data(route('validate', ['id' => $user->id]))
            //->writer(new  BinaryWriter())
            ->size(150)
            ->margin(10)
            ->build()
         ;

        $qr->saveToFile(storage_path("app/public/qr-{$user->carne}.png"));

       // return view('pdf.carne')->with(['qr' => $qr->getDataUri()]);

        $pdf = Pdf::loadView('pdf.carne', [
            'qr' =>  $qr->getDataUri(),
            'user' => $user
        ]);
        return $pdf->download("carne-{$user->carne}.pdf");
    }
}
