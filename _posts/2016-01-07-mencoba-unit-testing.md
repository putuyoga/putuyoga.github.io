---
title: Mencoba Unit Testing
comments: true
---

Lupa dapet darimana, teringat sebuah quote yang sedikit menohok berikut.

> Even you can code doesn't mean you are an engineer.

Emang bener, meskipun kamu bisa coding, belum tentu kamu engineer software. engineering gak hanya coding, karena masih banyak unsur lain yang perlu dimasukkan, unit testing, source control dan lain-lain.

## Unit Testing

... dan lebih baik terlambat daripada tidak sama sekali. Saya pun memutuskan mulai mencoba unit testing. Ya, selama ini untuk melakukan testing, saya masih manual, untuk awal-awal karena masih sederhana, mungkin lebih mudah manual. 

Tapi kelama-lamaan seiring makin kompleksnya program kita, kita perlu otomatisasi testing, sehingga kita bisa lebih fokus untuk menyelesaikan kebutuhan fungsional dari program.

Berhubung bahasa pemrograman utama yang saya pakai C# dan menggunakan IDE Visual Studio, saya coba belajar unit testing. Serius.

Pertama-tama, coba bikin Class Library Project via menu File > Create Project. Lalu buat class sederhana yang ga ada keren-kerennya, kayak dibawah. 

{% highlight csharp %}
public class Manusia
{
    public int Energi { get; private set; }
    public bool Sakit { get; private set; }

    public void Makan(int kalori)
    {
        Energi += kalori;
    }

    public void Kerja(int kalori)
    {
        Energi -= kalori;

        if (Energi < 0)
        {
            Energi = 0;
            Sakit = true;
        }
    }

    public void Berobat()
    {
        Sakit = false;
    }
}
{% endhighlight %}

Udah gitu doang om ? Yoi. Maafkan kemalesan saya. Bikin Unit Test Project (klik Kanan Solution Explorer > Add > New Project), lalu saya coba bikin class class test untuk testing class Manusia ini. 

Ada beberapa yang saya ujikan, yaitu kondisi kondisi yang sudah ditetapkan sebelumnya. Seperti contohnya ketika kerja melebih kalori energi tersimpan, maka properti sakit menjadi true dan energi menjadi 0.

{% highlight csharp %}
[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void KerjaBerlebihan_JadiSakit_DanEnergiHabis()
    {
        var manusia = new Manusia();
        manusia.Makan(100);

        manusia.Kerja(200);

        Assert.AreEqual(true, manusia.Sakit);
        Assert.AreEqual(0, manusia.Energi);
    }

    [TestMethod]
    public void HabisMakanEnergiTambah()
    {
        var manusia = new Manusia();
        var kaloriMakan = 100;
        var energiAwal = manusia.Energi;

        manusia.Makan(kaloriMakan);

        var energiAkhir = manusia.Energi;

        Assert.AreEqual(kaloriMakan, energiAkhir - energiAwal);
    }

    [TestMethod]
    public void HabisBerobatSakitFalse()
    {
        var manusia = new Manusia();
        manusia.Kerja(100);

        Assert.AreEqual(true, manusia.Sakit);

        manusia.Berobat();

        Assert.AreEqual(false, manusia.Sakit);
    } 
}
{% endhighlight %}

Selanjutnya buka Test Explorer via menu Test > Windows > Test Explorer. Dan selanjutnya jalankan semua test case yang ada dengan mengklik link 'run all'.  

![test_unit_example.JPG]({{site.baseurl}}/assets/images/test_unit_example.JPG)

Memang sederhana, namun selanjutnya saya akan coba terapkan di berbagai project saya kedepan untuk memudahkan karena untuk testing saya otomatisasi. Uhuy.
