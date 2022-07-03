using System;

class EarningsProfile
{
    public EarningsProfile()
    {

    }
    const int WORKDAYS_PER_YEAR = 260;
    const int FISCAL_QUARTERS = 4;
    const int DAYS_PER_FISCAL_QUARTER = WORKDAYS_PER_YEAR / FISCAL_QUARTERS;

    public bool IsSalary { get; set; }

    public decimal AnnualSalary { get; private set; }
    public decimal HourlyPay { get; private set; }

    public decimal SalaryEarningsPerHour
    {
        get { return SalaryEarningsPerHour; }
        set { SalaryEarningsPerHour = value; }
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

        // (1) User chooses which how they are paid: salary or hourly
        Console.WriteLine("Welcome to Purchase Power Calculator! Here you can find out how your rate of dollars earned over time (your income) can give your a better sense of the cost of your purchases.");
        Console.WriteLine("\nFirst, enter \"H\" if your pay is hourly and \"S\" if your pay is salary: ");
        while (true)
        {
            char salaryOrHourly = Char.ToUpper(Console.ReadKey(true).KeyChar);
            if (salaryOrHourly == 'H')
            {
                profile.IsSalary = false;
                break;
            }
            else if (salaryOrHourly == 'S')
            {
                profile.IsSalary = true;
                break;
            }
        }
        Console.WriteLine(profile.IsSalary); ;

        // (2) User enters salary or hourly pay
        
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
