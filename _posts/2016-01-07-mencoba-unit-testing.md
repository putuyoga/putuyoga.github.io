---
title: Mencoba Unit Testing
published: true
---

Suatu hari, saya ngeliat postingan yang menggugah saya. Sedikit menampar tepatnya wkakaka.

![karaoke_level_coder.JPG]({{site.baseurl}}/assets/images/karaoke_level_coder.JPG)

Ternyata bahwa ane ini hanyalah karaoke level coder *eh.

Seperti kata om norman sebagai sesepuh di dunia software engineering (_technical evangelist microsoft Indonesia coy!_):

> Even you can code doesn't mean you are an engineer.

... dan lebih baik terlambat daripada tidak sama sekali. Saya pun memutuskan mulai mencoba unit testing. 

Ya, selama ini untuk melakukan testing, saya masih manual, untuk awal-awal karena masih sederhana, mungkin lebih mudah manual. 

Tapi kelama-lamaan seiring makin kompleksnya program kita, kita perlu otomatisasi testing, sehingga kita bisa lebih fokus untuk menyelesaikan kebutuhan fungsional dari program.

Berhubung bahasa pemrograman utama yang saya pakai C# dan menggunakan IDE Visual Studio, saya coba belajar unit testing.

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
