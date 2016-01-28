double convert = 3.5 / 36000;
int threshold1 = 0;
int threshold2 = 0;
int median(int pin) {
  int min = 1024;
  int max = 0;
  long sum = 0;
  int n = 50;
  int median = 0;
  for(int i=0; i < n; i++) {
    int sensorWert =analogRead(pin);
    if(sensorWert > max) {
      max = sensorWert; 
    }
    if(sensorWert < min) {
      min = sensorWert;
    }
    sum += sensorWert;
  }
  median = (sum - (min + max)) / (n - 2);
  return median * 0.9;
}
void setup()
{
  pinMode(13, OUTPUT);
  Serial.begin(9600);
  digitalWrite(13, HIGH);
  threshold1 = median(A0);
  threshold2 = median(A1);
}
double measureGoalSpeed(int pin, int threshold) {
  unsigned long start = micros();
  int sensorWert = 0;
  while(sensorWert < threshold) {
    sensorWert = analogRead(pin);
  }
  long diff = micros() - start;
  Serial.println("Time");
  Serial.println(diff);
  return (0.035/((double)diff/(double)1000000))*3.6;
  //return ((double) diff / convert);
}
void loop()
{
  digitalWrite(13, HIGH);
  int sensorWert = analogRead(A0);
  if(sensorWert < threshold1) {
    Serial.println("GOOOHOOAAAAAL A0" );
    Serial.println(measureGoalSpeed(A0, threshold1));
    delay(1000);
  }
  sensorWert = analogRead(A1);
  if(sensorWert < threshold2) {
    Serial.println("GOOOHOOAAAAAL A1" );
    Serial.println(measureGoalSpeed(A1, threshold2));
    delay(1000);
  }
}