using System;

class EarningsProfile
{
    public EarningsProfile()
    {

    }

    const int WORKDAYS_PER_YEAR = 260;
    const int FISCAL_QUARTERS = 4;
    const int DAYS_PER_FISCAL_QUARTER = WORKDAYS_PER_YEAR / FISCAL_QUARTERS;

    public bool IsSalary { get; private set; }

    public decimal AnnualSalary { get; private set; }
    public decimal HourlyPay { get; private set; }


    public decimal EarningsPerMillisecond;
    public decimal EarningsPerSecond;
    public decimal EarningsPerMinute;
    public decimal EarningsPerHour;
    public decimal EarningsPerEightHourWorkday;
    public decimal EarningsPerFiveDayWorkweek;
    public decimal EarningsPerFourWeeks;
    public decimal EarningsPerFiscalQuarter;
    public decimal EarningsPerHalfYear;
    public decimal EarningsPerYear;  // annually
    public decimal EarningsPerThreeYears;
    public decimal EarningsPerFiveYears;
    public decimal EarningsPerTenYears;
    public decimal EarningsPerFifteenYears;
    public decimal EarningsPerTwentyYears;
    public decimal EarningsPerThirtyYears;
    public decimal EarningsPerFiftyYears;
    public void AreEarningsSalaryOrHourly()
    {
        Console.Write("\nFirst, enter \"H\" if your pay is hourly and \"S\" if your pay is salary: ");
        while (true)
        {
            char salaryOrHourly = Char.ToUpper(Console.ReadKey(true).KeyChar);
            if (salaryOrHourly == 'H')
            {
                IsSalary = false;
                Console.WriteLine("\nHourly");
                break;
            }
            else if (salaryOrHourly == 'S')
            {
                IsSalary = true;
                Console.WriteLine("\nSalary");
                break;
            }
        }
    }
    public void SetSalaryOrHourly()
    {
        if (IsSalary)
        {
            while (true)
            {
                Console.Write("\nHow much do you make per year (in US dollars)?: ");
                if (decimal.TryParse(Console.ReadLine(), out decimal salary))
                {
                    AnnualSalary = salary;
                    Console.Write($"${AnnualSalary} salary");
                    break;
                }
                Console.WriteLine("Please enter a valid numeric monetary amount (without the dollar sign).");
            }
        }
        else
        {
            while (true)
            {
                Console.Write("\nHow much do you make per hour (in US dollars)?: ");
                if (decimal.TryParse(Console.ReadLine(), out decimal hourly))
                {
                    HourlyPay = hourly;
                    Console.Write($"${HourlyPay}/hour");
                    break;
                }
                Console.WriteLine("Please enter a valid numeric monetary amount (without the dollar sign).");
            }
        }
    }
    public void CalculateRates()
    {
        EarningsPerHour = IsSalary ? (AnnualSalary / WORKDAYS_PER_YEAR / 8) : HourlyPay;
        
        EarningsPerMinute = EarningsPerHour /60;
        EarningsPerSecond = EarningsPerHour /60 /60;
        EarningsPerMillisecond = EarningsPerHour /60 /60 /1000;

        EarningsPerEightHourWorkday = EarningsPerHour * 8;
        EarningsPerFiveDayWorkweek = EarningsPerEightHourWorkday * 5;
        EarningsPerFourWeeks = EarningsPerFiveDayWorkweek * 4;
        EarningsPerFiscalQuarter = EarningsPerEightHourWorkday * DAYS_PER_FISCAL_QUARTER;
        EarningsPerHalfYear = EarningsPerFiscalQuarter * 2;
        EarningsPerYear = EarningsPerHour * WORKDAYS_PER_YEAR * 8;
        EarningsPerThreeYears = EarningsPerYear * 3;
        EarningsPerFiveYears = EarningsPerYear * 5;
        EarningsPerTenYears = EarningsPerYear * 10;
        EarningsPerFifteenYears = EarningsPerYear * 15;
        EarningsPerTwentyYears = EarningsPerYear * 20;
        EarningsPerThirtyYears = EarningsPerYear * 30;
        EarningsPerFiftyYears = EarningsPerYear * 50;
    }
    public void RenderRates()
    {
        Console.WriteLine("Here is the breakdown of your rates by various measurements of time: \n");
        Console.WriteLine($"" +
            $"per millisecond: \t${EarningsPerMillisecond.ToString("#,##0.0000000000")}\n" +
            $"per second: \t\t${EarningsPerSecond.ToString("#,##0.000000")}\n" +
            $"per minute: \t\t${EarningsPerMinute.ToString("#,##0.0000")}\n" +
            $"per hour: \t\t${EarningsPerHour.ToString("#,##0.00")}\n" +
            $"per 8-hour workday: \t${EarningsPerEightHourWorkday.ToString("#,##0.00")}\n" +
            $"per 5-day workweek: \t${EarningsPerFiveDayWorkweek.ToString("#,##0.00")}\n" +
            $"per 4 weeks: \t\t${EarningsPerFourWeeks.ToString("#,##0.00")}\n" +
            $"per fiscal quarter: \t${EarningsPerFiscalQuarter.ToString("#,##0.00")}\n" +
            $"per half year: \t\t${EarningsPerHalfYear.ToString("#,##0.00")}\n" +
            $"per year (annually): \t${EarningsPerYear.ToString("#,##0.00")}\n" +
            $"per 3 years: \t\t${EarningsPerThreeYears.ToString("#,##0.00")}\n" +
            $"per 5 years: \t\t${EarningsPerFiveYears.ToString("#,##0.00")}\n" +
            $"per 10 years: \t\t${EarningsPerTenYears.ToString("#,##0.00")}\n" +
            $"per 15 years: \t\t${EarningsPerFifteenYears.ToString("#,##0.00")}\n" +
            $"per 20 years: \t\t${EarningsPerTwentyYears.ToString("#,##0.00")}\n" +
            $"per 30 years: \t\t${EarningsPerThirtyYears.ToString("#,##0.00")}\n" +
            $"per 50 years: \t\t${EarningsPerFiftyYears.ToString("#,##0.00")}");
    }
    public decimal DollarsToHours(decimal dollars)
    {
        return dollars / EarningsPerHour;
    }
    public void RenderTimeConversions(decimal timeInHours)
    {
        Console.WriteLine($"\n" +
            $"cost: {Decimal.Round((timeInHours/60/60), 4)} seconds\n" +
            $"cost: {Decimal.Round((timeInHours/60), 4)} minutes\n" +
            $"cost: {Decimal.Round(timeInHours, 4)} hours\n" +
            $"cost: {Decimal.Round((timeInHours/8), 4)} eight-hour workdays\n" +
            $"cost: {Decimal.Round((timeInHours /8/5), 4)} five-day workweeks");
    }
    public void PriceChecker()
    {
        Console.WriteLine("\nThe remainder of this program is dedicated to telling you how much time it took \n" +
            "you to earn the purchasing power of a given purchase (or how much time \n" +
            "it will take you to earn the purchasng power back again).");
        
        while (true)
        {
            decimal timeInHours;
            while (true)
            {
                Console.Write("\nHow much is the purchase you are considering to make (in US dollars)?: ");
                if (decimal.TryParse(Console.ReadLine(), out decimal price))
                {
                    timeInHours = DollarsToHours(price);
                    break;
                }
            }
            RenderTimeConversions(timeInHours);
            char keepGoing;
            while (true)
            {
                Console.Write("\nWould you like to view the time cost of another purchase? Press \"Y\" to continue and \"N\" to end the program: ");
                keepGoing = char.ToUpper(Console.ReadKey().KeyChar);
                if (keepGoing == 'N' || keepGoing == 'Y')
                    break;
            }
            if (keepGoing == 'N') break;
            Console.WriteLine();
        }
    }
}

class Program
{
    public static void Main(string[] args)
    {
        // Goal: Present how much a person is earning so as to guage what convenience options should or shouldn't be participating in

        // As a user I can obtain information that lets me measure a purchase's value in terms of "time it took me to earn the ability to make this purchase"
        // learn how much time it took me to earn the money that a purchase I am considering to make required of me.

        // Initialize
        EarningsProfile profile = new EarningsProfile();

        // Intro
        Console.WriteLine("Welcome to Purchase Power Calculator!" +
            "\n\nHere you can find out how your rate of dollars earned over time " +
            "\n(your income) can give you a better sense of the cost of your purchases.");

        // (1) User chooses which how they are paid: salary or hourly
        profile.AreEarningsSalaryOrHourly();

        // (2) User enters salary or hourly pay

        profile.SetSalaryOrHourly();

        // (2.1) EarningsProfile properties are calculated for rates based on different time intervals
        profile.CalculateRates();

        // (3) Calculations occur to provide a breakdown of the rates at which you are earning money
        profile.RenderRates();

        // (4) On a loop, user gets to enter amounts of purchases they wish to make and the returned result shows how much time it took them to earn the purchasing power for that item (or how much time it will take them to earn that money back - the same number (in time worked/to work) either way)
        profile.PriceChecker();

        // Exit
        Console.WriteLine($"\n\nThank you for using Purchase Power Calculator!");
    }
}
