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
    public decimal EarningPerSecond;
    public decimal EarningPerMinute;
    public decimal EarningPerHour;
    public decimal EarningsPerDay;  // per 8 - hour day
    public decimal EarningsPerFiveDayWorkweek;  // per stnd.5-day work week
    public decimal EarningsPerFourWeeks;  // per 4 wks.
    public decimal EarningsPerFiscalQuarter;  // per fiscal quarter (3 months or 65 workdays)
    public decimal EarningsPerHalfYear;  // per half-year (semi-annually)
    public decimal EarningsPerYear;  // per year (annually)
    public decimal EarningsPerThreeYears;  // per 3 years
    public decimal EarningsPerFiveYears;  // per 5 years
    public decimal EarningsPerTenYears;  // per 10 years
    public decimal EarningsPerFifteenYears;  // per 15 years
    public decimal EarningsPerTwentyYears;  // per 20 years
    public decimal EarningsPerThirtyYears;  // per 30 years
    public decimal EarningsPerFiftyYears;  // per 50 years
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
        Console.WriteLine("Welcome to Purchase Power Calculator! Here you can find out how your rate of dollars earned over time (your income) can give your a better sense of the cost of your purchases.");

        // (1) User chooses which how they are paid: salary or hourly
        profile.AreEarningsSalaryOrHourly();

        // (2) User enters salary or hourly pay
        profile.SetSalaryOrHourly();
        // Console.WriteLine($"\n\nSalary: {profile.AnnualSalary}");
        // Console.WriteLine($"Hourly: {profile.HourlyPay}");

        // (3) Calculations occur to provide a breakdown of the rates at which you are earning money
        // per millisecond
        // per second
        // per minute
        // per hour
        // per 8 - hour day
        // per stnd.5-day work week
        // per 4 wks.
        // per fiscal quarter (3 months or 65 workdays)
        // per half-year (semi-annually)
        // per year (annually)
        // per 3 years
        // per 5 years
        // per 10 years
        // per 15 years
        // per 20 years
        // per 30 years
        // per 50 years

        // (4) On a loop, user gets to enter amounts of purchases they wish to make and the returned result shows how much time it took them to earn the purchasing power for that item (or how much time it will take them to earn that money back - the same number (in time worked/to work) either way)
    }
}
