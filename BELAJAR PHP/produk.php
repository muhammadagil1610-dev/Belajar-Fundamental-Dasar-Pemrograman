<?php

    declare(strict_types=1);

    $cashierName = "Ali";
    $itemPrice = 10000;
    $quantity = 5;
    $texRate = 0.11;
    $isPaid = true;

    $subtotal = $itemPrice * $quantity;
    $taxAmount = $subtotal * $texRate;
    $grandTotal = $subtotal + $taxAmount;
    $cashReceived = 100000;
    $changeAmount = $cashReceived - $grandTotal;

    echo "Nama Kasir: " . $cashierName . PHP_EOL;
    echo "Subtotal: Rp " . number_format($subtotal, 0, ',', '.') . PHP_EOL;
    echo "Pajak (11%): Rp " . number_format($taxAmount, 0, ',', '.') . PHP_EOL;
    echo "Total: Rp " . number_format($grandTotal, 0, ',', '.') . PHP_EOL;
    echo "Uang Diterima: Rp " . number_format($cashReceived, 0, ',', '.') . PHP_EOL;
    if ($isPaid) {
        echo "Kembalian: Rp " . number_format($changeAmount, 0, ',', '.') . PHP_EOL;
    } else {
        echo "Belum dibayar." . PHP_EOL;
    }
?>