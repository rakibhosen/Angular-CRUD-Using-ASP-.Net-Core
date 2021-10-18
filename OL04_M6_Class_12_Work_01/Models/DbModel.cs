using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace OL04_M6_Class_12_Work_01.Models
{
    public class Project
    {
        public Project()
        {
            this.Employees = new List<Employee>();
        }
        public int ProjectId { get; set; }
        [Required, StringLength(40), Display(Name = "Company Name")]
        public string ProjectName { get; set; }
        [Required, Column(TypeName = "money")]
        public decimal Budget { get; set; }
        public virtual ICollection<Employee> Employees { get; set; }
    }
    public class Employee
    {
        public int EmployeeId { get; set; }
        [Required, StringLength(40), Display(Name = "Employee Name")]
        public string EmployeeName { get; set; }
        [Required, Display(Name = "Join Date"), DataType(DataType.Date), DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}")]
        public DateTime JoinDate { get; set; }
        

        [Required, ForeignKey("Project")]
        public int ProjectId { get; set; }
        public virtual Project Project { get; set; }
    }
    public class EmployeeDbContext : DbContext
    {
        public EmployeeDbContext(DbContextOptions<EmployeeDbContext> options) : base(options) { }
        public DbSet<Project> Projects { get; set; }
        public DbSet<Employee> Employees { get; set; }
    }
}
